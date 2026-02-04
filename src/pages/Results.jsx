import { useSelector } from "react-redux"
import Form from "./Form"
import { Link } from "react-router-dom"

const Results = () => {
    const surveyData = useSelector(state => state.resultsReducer)
    return (
        <div className="container max-w-220 flex flex-col justify-center gap-4 items-center mx-auto mt-4">
            <div className="bg-white shadow p-4 border-t-4 border-t-fuchsia-700 rounded flex flex-col justify-center gap-4">
                <h1 className="font-bold">Hasil Form Survey Perokok</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, sapiente esse, quam eius optio perspiciatis ea voluptatum dolore molestias ut eaque laudantium doloribus alias voluptate odit praesentium consequuntur pariatur? Eos.</p>
            </div>
            <div className="bg-white min-h-100 shadow p-4 border-t-4 border-t-fuchsia-700 rounded flex flex-col items-center gap-4 w-full">
                <table className="border border-black border-collapse text-center w-full">
                    <thead>
                        <tr>
                            <th className="border border-black">Nama</th>
                            <th className="border border-black">Umur</th>
                            <th className="border border-black">Jenis Kelamin</th>
                            <th className="border border-black">Perokok</th>
                            <th className="border border-black">Merk Rokok Yang Pernah Dicoba</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (
                                surveyData.length > 0 ?
                                    surveyData.map(
                                        data =>
                                            <tr>
                                                <td className="border border-black">{data.fullname}</td>
                                                <td className="border border-black">{data.age}</td>
                                                <td className="border border-black">{(data.gender === "laki-laki" ? "Laki Laki" : "Perempuan")}</td>
                                                <td className="border border-black">{(data.isSmoker === "true" ? "Perokok" : "Tidak merokok")}</td>
                                                <td className="border border-black">{(Array.isArray(data.cigarBrands.length) ? data.cigarBrands.forEach(brand => brand) : "Tidak ada merk dari list yang pernah dicoba")}</td>
                                            </tr>
                                    )
                                    :
                                    (<tr>
                                        <td className="font-bold text-lg span" colspan={5}>Data masih kosong</td>
                                    </tr>)
                            )
                        }
                    </tbody>
                </table>
                <Link to="/" className="text-fuchsia-700/60 hover:text-fuchsia-700">Kembali ke form survey</Link>
            </div>
        </div>
    )
}
export default Results