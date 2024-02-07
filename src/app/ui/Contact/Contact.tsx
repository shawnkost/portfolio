import Button from "@/app/ui/Button";

export function Contact() {
  return (
    <div
      className="mx-auto mt-3 max-w-screen-2xl rounded-[67px] bg-secondary py-7 px-6"
      id="contact"
    >
      <div className="mx-auto max-w-7xl py-8 text-white">
        <h2 className="mb-6 text-center text-4xl font-semibold uppercase">
          Contact me
        </h2>
        <p className="wrap-balance text-center">
          Although I&apos;m not currently looking for any new opportunities, my
          inbox is always open. Whether you have a question or just want to say
          hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="flex justify-center font-semibold">
          <Button
            text="Say Hello"
            variant="primary"
            link="mailto:shawnmkost@gmail.com"
            border={false}
          />
        </div>
      </div>
    </div>
  );
}
