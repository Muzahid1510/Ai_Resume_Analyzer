import type { Route } from "./+types/home";
import Navbar from "../component/Navbar"
import {resumes} from "../../constants";
import Resumecard from "../component/resumecard";
import {usePuterStore} from "~/lib/puter";
import {Link, useNavigate} from "react-router";
import {useEffect, useState} from "react";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resumind" },
    { name: "description", content: "Welcome Resume Analyzer" },
  ];
}

export default function Home() {
  const { auth} = usePuterStore();
  const navigate = useNavigate();
   useEffect(() => {
    if(!auth.isAuthenticated) navigate('/auth?next=/');
  }, [auth.isAuthenticated])

  return <main className="bg-[url('/images/bg-main.svg')] bg-cover_">
  <Navbar/>
<section className="main-section">
  <div  className="page-heading py-16">
    <h1>Track Your Resume and Resume Ratings</h1>
    <h2>Review Your submission and Check Your Ai-Powered feedback</h2>
  </div>
  </section> 

  {resumes.length>0 &&(
    <div className="resumes-section">
      {resumes.map((resume) => (
        <Resumecard key={resume.id} resume={resume}/>
      ))}
    </div>
  )}



   </main>
}
