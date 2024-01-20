import meetjr from "../images/MeettheTeam.svg"
import meetsr from "../images/Meettheheads.svg"
import mugi from "../images/mugi.jpg"
import linkedin from '../images/bi_linkedin.svg'
import gitlogo from '../images/github_logo.svg'
import Nav from "../components/Nav"


const Kiri = {
    name : "Prabhav Agarwal",
    git_link : "https://github.com/Kirit0me",
    linkedin : "https://www.linkedin.com/in/prabhav-agarwal-a7186aa0/",
    img : mugi
}

const Juniors = [Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri, Kiri]
const Seniors = [Kiri, Kiri, Kiri]

function JuniorCard( {member} ) {
    return (
        <div className="w-5/6 p-6 m-auto backdrop-blur-sm">

            <div className="flex flex-col align-middle rounded-3xl border-1 border-slate-300 hover:border-slate-400 bg-aurora-bg hover:bg-gradient-to-br from-stone-800 to-bg-black bg-bottom text-white p-6">
                <div className="p-4"><img className="rounded-full w-24 h-24 m-auto" src={member.img}></img></div>
                <h1 className="text-center text-2xl font-bold py-4">{member.name}</h1>
                <div className="rounded-3xl border-white border-2 p-2">
                    <h1 className="text-center text-xl px-4"> Junior Designer </h1>
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
                    <h1 className="text-center text-xl px-4"> Senior Designer </h1>
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
        <div className="bg-black pt-16 bg-dev-bg">
            <div className="p-10"><img src={meetjr} className="m-auto"></img></div>
            <div className="grid md:grid-cols-3 grid-cols-1 ">
            {Juniors.map((member) => (
                <JuniorCard key={member.id} member={member} />
            ))}
            </div>
            <div className="p-10"><img src={meetsr} className="m-auto"></img></div>
            <div className="grid md:grid-cols-3 grid-cols-1 ">
            {Seniors.map((member) => (
                <SeniorCard key={member.id} member={member} />
            ))}
            </div>
        </div>
        </>
    )
}