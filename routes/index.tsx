import { useSignal } from "@preact/signals";
export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Locate you're cargo!</h1>
        <p class="my-4">
          Enter you're cargo tracker ID
        </p>
        <input type="text" placeholder="ID-1234567890" />
        <img src="https://media.tenor.com/_BiwWBWhYucAAAAd/what-huh.gif" />
      </div>
    </div>
  );
}
