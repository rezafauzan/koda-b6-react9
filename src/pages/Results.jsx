import { useSelector } from "react-redux"

const Results = () => {
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
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Results