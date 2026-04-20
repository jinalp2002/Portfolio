
import { toast } from 'react-toastify'
import assets from '../assets/assets';

function Contact() {


    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "022028a9-7140-4304-a45c-17783485a49c");


        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });
            type ApiResponse = {
                success: boolean;
                message: string;
            };
            const data: ApiResponse = await response.json();
            if (data.success) {
                toast.success('Thank you for submission')
                form.reset();
            } else {
                toast.error(data.message)
            }

        } catch (error) { //error is a variable when error comes true the error is come on (erro)
            if (error instanceof Error) { //it check error is really of javascript object if yes then (error.message)
                toast.error(error.message) //exact error msg eg.password is not valid
            } else {
                toast.error("Something went wrong") //backup error msg(unknown msg)
            }
        }


    };

    return (
        <div id="Contact" className="flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white mt-7 pb-7 font-serif">


            <form onSubmit={onSubmit} className="grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full">
                <div>
                    <p className="mb-2 text-sm font-medium">Your Name</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:text-black">
                        <img src={assets.person_icon} alt="" />
                        <input type="text" name="name" placeholder="Enter your name"
                            className="w-full p-3 text-sm outline-none" />
                    </div>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium">Email id</p>
                    <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:text-black">
                        <img src={assets.email_icon} alt="" />
                        <input type="email" name="email" placeholder="Enter your email"
                            className="w-full p-3 text-sm outline-none" />
                    </div>
                </div>
                <div className="sm:col-span-2 dark:text-white">
                    <p className="mb-2 text-sm font-medium">Message</p>
                    <textarea name="message" required rows={8} placeholder="Enter your message" className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"></textarea>
                </div>

                <button type="submit" className="w-max flex gap-2 bg-[#01a8ae] text-white dark:bg-[#0487d9] text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all hover:bg-yellow-600">Submit
                    <img src={assets.arrow_icon} alt="" className="w-4" />
                </button>
            </form>
            {/* <span>{result}</span> */}
        </div>
    );
}


export default Contact