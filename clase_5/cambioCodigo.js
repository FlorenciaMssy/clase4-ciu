async function getProcessedData(url) {
    try {
        const response = await downloadData(url);

        console.log("Datos descargados");
        const data = await processDataInWorker(response);

        return data;
    } catch(error) {
        console.log(error.message)
    }
}

getProcessedData('https://blabla.com)