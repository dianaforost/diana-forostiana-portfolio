"use client";
import { Container } from "@/components/Container/Container";
import { InputField } from "@/components/InputField/InputField";
import ScrollFadeIn from "@/components/ScrollFadeIn/ScrollFadeIn";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import data from "../../data/data.json";
import { formSchema } from "@/utils/yupSchema";
import getButtonClass from "@/utils/getButtonClass";
import getButtonContent from "@/utils/getButtonContent";
import Loader from "@/components/Loader/Loader";
import { useEffect, useState } from "react";
import { sendEmail } from "../../utils/sendEmail";

export default function ContactsSection() {
  const { form } = data;
  const {
    subject,
    email,
    content,
    contentPlaceholder,
    subjectPlaceholder,
    sendBtnError,
    sendBtnSuccess,
    sendBtn,
  } = form;

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(
    null
  );

  const buttonClasses = getButtonClass(formStatus, loading);
  const buttonContent = getButtonContent(
    formStatus,
    loading,
    sendBtn,
    sendBtnSuccess,
    sendBtnError,
    Loader
  );

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(formSchema),
  });

  const STORAGE_KEY = "contact_us_form";

  useFormPersist(STORAGE_KEY, {
    watch,
    storage: typeof window !== "undefined" ? window.localStorage : undefined,
    setValue,
  });

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      setFormStatus("error");
      const timer = setTimeout(() => {
        setFormStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  const onSubmit = async (formData: object) => {
    setLoading(true);
    try {
      await sendEmail(formData);
      // await sendMessageToTelegram(formData);
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);

      reset();
    } catch (error) {
      console.error(error);
      setFormStatus("error");
      setTimeout(() => {
        setFormStatus(null);
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contacts-bg-mob sm:contacts-bg-tab md:contacts-bg-desk bg-cover bg-center bg-fixed py-[60px] sm:py-[80px] md:py-[120px] text-center text-white min-h-screen">
      <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
            <h2 className="text-[44px] sm:text-[76px] md:text-[92px]">
              Contact me
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full text-left sm:w-[342px] md:w-[500px] flex flex-col gap-[51px] md:gap-[68px] xl:gap-[80px] mx-auto"
            >
              <div className="flex flex-col gap-[23px] md:gap-[32px]">
                <InputField
                  label={email}
                  type="email"
                  name="email"
                  register={register}
                  errors={errors}
                  placeholder={email}
                />
                <InputField
                  label={subject}
                  type="text"
                  name="subject"
                  register={register}
                  errors={errors}
                  placeholder={subjectPlaceholder}
                />
                <InputField
                  label={content}
                  type="textarea"
                  name="content"
                  register={register}
                  errors={errors}
                  placeholder={contentPlaceholder}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className={buttonClasses}
                  disabled={
                    loading ||
                    formStatus === "error" ||
                    formStatus === "success"
                  }
                >
                  {buttonContent}
                </button>
              </div>
            </form>
          </div>
        </ScrollFadeIn>
      </Container>
    </section>
  );
}

// export default function ContactsSection() {
//   const { form } = data;
//   const {
//     subject,
//     email,
//     msg,
//     msgPlaceholder,
//     subjectPlaceholder,
//     sendBtnError,
//     sendBtnSuccess,
//     sendBtn,
//   } = form;
//   const [loading, setLoading] = useState(false);
//   const [formStatus, setFormStatus] = useState<null | "success" | "error">(
//     null
//   );

//   const buttonClasses = getButtonClass(formStatus, loading);
//   const buttonContent = getButtonContent(
//     formStatus,
//     loading,
//     sendBtn,
//     sendBtnSuccess,
//     sendBtnError,
//     Loader
//   );

//   const {
//     register,
//     handleSubmit,
//     watch,
//     setValue,
//     formState: { errors },
//     reset,
//   } = useForm({
//     // mode: "onChange",
//     resolver: yupResolver(formSchema),
//   });

//   const STORAGE_KEY = "contact_us_form";

//   useFormPersist(STORAGE_KEY, {
//     watch,
//     storage: typeof window !== "undefined" ? window.localStorage : undefined,
//     setValue,
//   });

//   useEffect(() => {
//     if (Object.keys(errors).length > 0) {
//       setFormStatus("error");
//       const timer = setTimeout(() => {
//         setFormStatus(null);
//       }, 3000);
//       return () => clearTimeout(timer);
//     }
//   }, [errors]);

//   const onSubmit = async (formData: object) => {
//     setLoading(true);
//     console.log(formData);
//     try {
//       // await sendEmail(formData);
//       // await sendMessageToTelegram(formData);

//       setFormStatus("success");
//       setTimeout(() => {
//         setFormStatus(null);
//       }, 3000);

//       reset();
//     } catch (error) {
//       console.error(error);
//       setFormStatus("error");
//       setTimeout(() => {
//         setFormStatus(null);
//       }, 3000);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className="contacts-bg-mob sm:contacts-bg-tab md:contacts-bg-desk bg-cover bg-center bg-fixed py-[60px] sm:py-[80px] md:py-[120px] text-center text-white">
//       <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
//         <ScrollFadeIn>
//           <div className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
//             <h2 className="text-[44px] sm:text-[76px] md:text-[92px]">
//               Contact me
//             </h2>
//             <form
//               onSubmit={handleSubmit(onSubmit)}
//               className="w-full text-left sm:w-[342px] md:w-[500px] flex flex-col gap-[51px] md:gap-[68px] xl:gap-[80px] mx-auto"
//             >
//               <div className="flex flex-col gap-[23px] md:gap-[32px]">
//                 <InputField
//                   label={email}
//                   type="email"
//                   name="email"
//                   register={register}
//                   errors={errors}
//                   placeholder={email}
//                 />
//                 <InputField
//                   label={subject}
//                   type="text"
//                   name="subject"
//                   register={register}
//                   errors={errors}
//                   placeholder={subjectPlaceholder}
//                 />
//                 <InputField
//                   label={msg}
//                   type="textarea"
//                   name="message"
//                   register={register}
//                   errors={errors}
//                   placeholder={msgPlaceholder}
//                 />
//               </div>
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className={buttonClasses}
//                   disabled={
//                     loading ||
//                     formStatus === "error" ||
//                     formStatus === "success"
//                   }
//                 >
//                   {buttonContent}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </ScrollFadeIn>
//       </Container>
//     </section>
//   );
// }
