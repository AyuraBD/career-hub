const getStoredApplication = () =>{
    const storedApp = localStorage.getItem('job-applications');
    if(storedApp){
        return JSON.parse(storedApp);
    }
    return [];
}
const saveJobApplication = id => {
  const storedApp = getStoredApplication();

  const exists = storedApp.find(jobId => jobId === id);
  if(!exists){
    storedApp.push(id);
    localStorage.setItem('job-applications', JSON.stringify(storedApp));
  }
}

export {saveJobApplication, getStoredApplication}