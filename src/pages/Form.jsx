import { useForm } from "react-hook-form"
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { addSurveyData } from "../redux/reducers/resultsReducer";
import { useNavigate } from "react-router-dom";

const Form = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    
    const { register, handleSubmit } = useForm(
        {
            defaultValues: {
                gender: "laki-laki",
                isSmoker: "false"
            }
        }
    );
    function addData(data) {
        dispatch(addSurveyData(data))
        navigator("/results")
    }
    return (
        <section id="form">
            <div className="container max-w-180 flex flex-col justify-center gap-4 items-center mx-auto mt-4">
                <div className="bg-white shadow p-4 border-t-4 border-t-fuchsia-700 rounded flex flex-col justify-center gap-4">
                    <h1 className="font-bold">Form Survey Perokok</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, sapiente esse, quam eius optio perspiciatis ea voluptatum dolore molestias ut eaque laudantium doloribus alias voluptate odit praesentium consequuntur pariatur? Eos.</p>
                    <span className="text-red-700"><sup>*</sup>Menunjukan form harus diisi</span>
                </div>
                <form onSubmit={handleSubmit(addData)} className="flex flex-col gap-4 justify-center w-full">
                    <Input labelName="fullname" labelText="Siapa nama anda ?" type="text" {...register("fullname")} placeholder="Masukan nama anda" required={true} />
                    <Input labelName="age" labelText="Berapa umur anda ?" type="number" {...register("age")} placeholder="Masukan umur anda" required={true} />
                    <label htmlFor="gender-laki-laki" className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Apa jenis kelamin anda ?<sup className="text-red-700">*</sup></span>
                        <label htmlFor="gender-laki-laki" className="flex items-center gap-4">
                            <input type="radio" {...register("gender")} id="gender-laki-laki" value={"laki-laki"} required />
                            <span>Laki-laki</span>
                        </label>
                        <label htmlFor="gender-perempuan" className="flex items-center gap-4">
                            <input type="radio" {...register("gender")} id="gender-perempuan" value={"perempuan"} required />
                            <span>Perempuan</span>
                        </label>
                    </label>
                    <label htmlFor="notSmoker" className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Apakah anda seorang perokok?<sup className="text-red-700">*</sup></span>
                        <label htmlFor="smoker" className="flex items-center gap-4">
                            <input type="radio" {...register("isSmoker")} id="smoker" value={true} required />
                            <span>Ya</span>
                        </label>
                        <label htmlFor="notSmoker" className="flex items-center gap-4">
                            <input type="radio" {...register("isSmoker")} id="notSmoker" value={false} required />
                            <span>Tidak</span>
                        </label>
                    </label>
                    <label className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Jika ya, rokok apa yang pernah anda coba?</span>
                        <label htmlFor="gudang-garam" className="flex items-center gap-4">
                            <input type="checkbox" {...register("cigarBrands")} id="gudang-garam" value={"gudang-garam"} />
                            <span>Gudang Garam</span>
                        </label>
                        <label htmlFor="filter" className="flex items-center gap-4">
                            <input type="checkbox" {...register("cigarBrands")} id="filter" value={"filter"} />
                            <span>Filter</span>
                        </label>
                        <label htmlFor="lucky-strike" className="flex items-center gap-4">
                            <input type="checkbox" {...register("cigarBrands")} id="lucky-strike" value={"lucky-strike"} />
                            <span>Lucky Strike</span>
                        </label>
                        <label htmlFor="marlboro" className="flex items-center gap-4">
                            <input type="checkbox" {...register("cigarBrands")} id="marlboro" value={"marlboro"} />
                            <span>Marlboro</span>
                        </label>
                        <label htmlFor="esse" className="flex items-center gap-4">
                            <input type="checkbox" {...register("cigarBrands")} id="esse" value={"esse"} />
                            <span>Esse</span>
                        </label>
                    </label>
                    <div className="flex gap-4 items-center h-10">
                        <button type="submit" className="cursor-pointer bg-fuchsia-700 h-full w-16 text-white rounded flex flex-col justify-center items-center">
                            Kirim
                        </button>
                        <button type="reset" className="cursor-pointer">
                            Kosongkan
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
export default Form