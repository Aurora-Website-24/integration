import meetjr from "../images/MeettheTeam.svg"
import meetsr from "../images/Meettheheads.svg"

import aditi from "../images/aditi.jpg"
import aarya from "../images/aarya.jpg"
import aman from "../images/aman.jpg"
import roop from "../images/roopanshi.jpg"
import kshitij from "../images/kshitij.jpg"
import souvik from "../images/souvik.jpg"
import mugi from "../images/mugi.jpg"
import shashank from "../images/shashank.jpg"


import linkedin from '../images/bi_linkedin.svg'
import gitlogo from '../images/github_logo.svg'
import Nav from "../components/Nav"


const Kiri = {
    name : "Prabhav Agarwal",
    git_link : "https://github.com/Kirit0me",
    linkedin : "https://www.linkedin.com/in/prabhav-agarwal-a7186aa0/",
    img : mugi,
    designation : "Frontend developer"
}

const Roop = {
    name : "Roopanshi Juneja",
    git_link : "https://github.com/roop1978",
    linkedin : "https://www.linkedin.com/in/roopanshi-j/",
    img : roop,
    designation : "Frontend developer"
}

const Shash = {
    name : "Shashank",
    git_link : "https://github.com/2shashank11",
    linkedin : "https://www.linkedin.com/in/work-with-shashank?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img : shashank,
    designation : "Backend developer"
}

const Aman = {
    name : "Aman",
    git_link : "https://github.com/aman30gupta",
    linkedin : "https://www.linkedin.com/in/aman-gupta-353073299/",
    img : aman,
    designation : "Junior Designer"
}

const Kshitij = {
    name : "Kshitij",
    git_link : "https://github.com/kshitijpaliya",
    linkedin : "https://www.linkedin.com/in/kshitij-paliya",
    img : kshitij,
    designation : "Junior Designer"
}

const Souvik = {
    name : "Souvik Goswami",
    git_link : "https://github.com/souvik99O",
    linkedin : "https://www.linkedin.com/in/souvik-goswami-539522268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    img : souvik,
    designation : "Junior Designer"
}

const Aditi = {
    name : "Aditi",
    git_link : "https://github.com/aditipy",
    linkedin : "https://www.linkedin.com/in/aditi-sharma-6a947a213/",
    img : aditi,
    designation : "Senior Designer"
}

const Aarya = {
    name : "Aarya",
    git_link : "https://github.com/aaaaryaaa",
    linkedin : "https://www.linkedin.com/in/aarya-r-411a53244/",
    img : aarya,
    designation : "Frontend developer"
}


const Juniors = [Kiri, Aarya, Aman, Roop, Shash, Souvik, Kshitij]
const Seniors = [Aditi]

function JuniorCard( {member} ) {
    return (
        <div className="w-5/6 p-6 m-auto backdrop-blur-sm">

            <div className="flex flex-col align-middle rounded-3xl border-1 border-slate-300 hover:border-slate-400 bg-aurora-bg hover:bg-gradient-to-br from-stone-800 to-bg-black bg-bottom text-white p-6">
                <div className="p-4"><img className="rounded-full w-28 h-28 object-cover m-auto" src={member.img}></img></div>
                <h1 className="text-center text-2xl font-bold py-4">{member.name}</h1>
                <div className="rounded-3xl border-white border-2 p-2">
                    <h1 className="text-center text-xl px-4"> {member.designation} </h1>
                </div>
                <div className="flex flex-row justify-center">
                    <a href ={member.linkedin}><button className="p-2"><img src={linkedin} alt="" /></button></a>
                    <a href ={member.git_link}><button className="p-2"><img src={gitlogo} alt="" /></button></a>
                </div>
            </div>
            </div>
    )
}

function SeniorCard( {member} ) {
    return (
        <div className="w-5/6 p-6 m-auto backdrop-blur-sm">
            <div className="flex flex-col rounded-3xl bg-aurora-bg border-1 border-slate-300 hover:border-slate-400 bg-bottom hover:bg-gradient-to-br from-stone-800 to-bg-black text-white p-6">
                <div className="p-4"><img className="rounded-full w-24 h-24 m-auto" src={member.img}></img></div>
                <h1 className="text-center text-2xl font-bold py-4">{member.name}</h1>
                <div className="rounded-3xl border-white border-2 p-2">
                    <h1 className="text-center text-xl px-4"> {member.designation} </h1>
                </div>
                <div className="flex flex-row justify-center">
                    <a href ={member.linkedin}><button className="p-2"><img src={linkedin} alt="" /></button></a>
                    <a href ={member.git_link}><button className="p-2"><img src={gitlogo} alt="" /></button></a>
                </div>
            </div>
            </div>
    )
}

export default function Developers() {
    return (
        <>
        <Nav />
        <div className="bg-black pt-16 bg-dev-bg bg-center bg-full">
            <div className="pt-10"><img src={meetjr} className="m-auto"></img></div>
            <div className="grid md:grid-cols-3 grid-cols-1 m-24">
            {Juniors.map((member) => (
                <JuniorCard key={member.id} member={member} />
            ))}
            </div>
            <div className="py-6"><img src={meetsr} className="m-auto"></img></div>
            <div className="grid md:grid-cols-3 grid-cols-1 m-24">
            {Seniors.map((member) => (
                <SeniorCard key={member.id} member={member} />
            ))}
            </div>
        </div>
        </>
    )
}