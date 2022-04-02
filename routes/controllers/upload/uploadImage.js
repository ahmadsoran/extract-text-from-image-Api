import { createWorker } from 'tesseract.js';

const getRequestedImage = (req, res) => {
    const requestedImage = req.file.originalname;

    const worker = createWorker({
        logger: m => console.log(m.progress)
    });

    (async () => {
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');
        const { data: { text } } = await worker.recognize('assets/img/' + requestedImage);
        res.send(text ? text : 'loading...');
        await worker.terminate();

    })();

}

export default { getRequestedImage }