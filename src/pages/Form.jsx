import { useForm } from "react-hook-form"

const Form = () => {
    const { register, handleSubmit } = useForm();
    function addData() {

    }
    return (
        <section id="form">
            <div className="container max-w-360 flex flex-col justify-center gap-4 items-center mx-auto">
                <div className="bg-white shadow p-4 border-t-4 border-t-fuchsia-700 rounded flex flex-col justify-center gap-4">
                    <h1 className="font-bold">Form Survey Perokok</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, sapiente esse, quam eius optio perspiciatis ea voluptatum dolore molestias ut eaque laudantium doloribus alias voluptate odit praesentium consequuntur pariatur? Eos.</p>
                    <span className="text-red-700"><sup>*</sup>Menunjukan form harus diisi</span>
                </div>
                <form onSubmit={handleSubmit(addData)} className="flex flex-col gap-4 justify-center w-full">
                    <label htmlFor="fullname" className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Siapa nama anda ?</span>
                        <input type="text" name="fullname" id="fullname" className="h-10 outline-0 border-b border-b-fuchsia-700" placeholder="Masukan nama anda" />
                    </label>
                    <label htmlFor="age" className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Berapa umur anda ?</span>
                        <input type="text" name="age" id="age" className="h-10 outline-0 border-b border-b-fuchsia-700" placeholder="Masukan nama anda" />
                    </label>
                    <label for="gender-laki-laki" className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Apa jenis kelamin anda ?</span>
                        <label htmlFor="gender-laki-laki" className="flex items-center gap-4">
                            <input type="radio" name="gender" id="gender-laki-laki" value={"laki-laki"} />
                            <span>Laki-laki</span>
                        </label>
                        <label htmlFor="gender-perempuan" className="flex items-center gap-4">
                            <input type="radio" name="gender" id="gender-perempuan" value={"perempuan"} />
                            <span>Perempuan</span>
                        </label>
                    </label>
                    <label for="notSmoker" className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Apakah anda seorang perokok?</span>
                        <label htmlFor="smoker" className="flex items-center gap-4">
                            <input type="radio" name="isSmoker" id="smoker" value={"smoker"} />
                            <span>Ya</span>
                        </label>
                        <label htmlFor="notSmoker" className="flex items-center gap-4">
                            <input type="radio" name="isSmoker" id="notSmoker" value={"notSmoker"} />
                            <span>Tidak</span>
                        </label>
                    </label>
                    <label className="bg-white shadow p-4 flex flex-col justify-center gap-4">
                        <span>Apakah anda seorang perokok?</span>
                        <label htmlFor="gudang-garam" className="flex items-center gap-4">
                            <input type="checkbox" name="cigarBrands" id="gudang-garam" value={"gudang-garam"} />
                            <span>Gudang Garam</span>
                        </label>
                        <label htmlFor="filter" className="flex items-center gap-4">
                            <input type="checkbox" name="cigarBrands" id="filter" value={"filter"} />
                            <span>Filter</span>
                        </label>
                        <label htmlFor="lucky-strike" className="flex items-center gap-4">
                            <input type="checkbox" name="cigarBrands" id="lucky-strike" value={"lucky-strike"} />
                            <span>Lucky Strike</span>
                        </label>
                        <label htmlFor="marlboro" className="flex items-center gap-4">
                            <input type="checkbox" name="cigarBrands" id="marlboro" value={"marlboro"} />
                            <span>Marlboro</span>
                        </label>
                        <label htmlFor="esse" className="flex items-center gap-4">
                            <input type="checkbox" name="cigarBrands" id="esse" value={"esse"} />
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