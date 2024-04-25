import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MainLayout from "./layouts/MainLayout.jsx";
import JobsPage from "./pages/JobsPage.jsx";
import JobDetailsPage, {JobLoader} from "./pages/JobDetailsPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AddJobPage from "./pages/AddJobPage.jsx";
import EditJobPage from "./pages/EditJobPage.jsx";


function App() {
    const addJob = async (newJob) => {
        return await fetch("http://localhost:3001/jobs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJob)
        });
    }

    const deleteJob = async (id) => {
        return await fetch(`http://localhost:3001/jobs/${id}`, {
            method: "DELETE"
        });
    }

    const editJob = async (id, updatedJob) => {
        return await fetch(`http://localhost:3001/jobs/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedJob)
        });
    }

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={ <MainLayout /> } >
                <Route index element={<HomePage/>}/>
                <Route path="/jobs" element={<JobsPage/>}/>
                <Route path={"/jobs/:id"} loader={JobLoader} element={<JobDetailsPage deleteJob={deleteJob}/>}/>
                <Route path={"/jobs/edit/:id"} loader={JobLoader} element={<EditJobPage editJob={editJob}/>}/>
                <Route path="/add-job" element={<AddJobPage addJob={addJob} />  }/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Route>
        ));


    return <RouterProvider router={router}/>
}

export default App
