import Image from "next/image";
import data from "data.json";
import linkedinImage from "../../public/icons/logos_linkedin-icon.svg";
import gitHubImage from "../../public/icons/ant-design_github-filled.svg";
import instagramImage from "../../public/icons/skill-icons_instagram.svg";

function InstagramIcon({ href }: { href: string }) {
  return (
    <a href={href} className="hover:scale-150 transition-all">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
          fill="black"
        />
      </svg>
    </a>
  );
}

function GithubIcon({ href }: { href: string }) {
  return (
    <a href={href} className="hover:scale-150 transition-all">
      <svg
        width="30"
        height="30"
        viewBox="0 0 256 256"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M127.9 19.075C66.075 19.05 16 69.1 16 130.875C16 179.725 47.325 221.25 90.95 236.5C96.825 237.975 95.925 233.8 95.925 230.95V211.575C62 215.55 60.625 193.1 58.35 189.35C53.75 181.5 42.875 179.5 46.125 175.75C53.85 171.775 61.725 176.75 70.85 190.225C77.45 200 90.325 198.35 96.85 196.725C98.275 190.85 101.325 185.6 105.525 181.525C70.375 175.225 55.725 153.775 55.725 128.275C55.725 115.9 59.8 104.525 67.8 95.35C62.7 80.225 68.275 67.275 69.025 65.35C83.55 64.05 98.65 75.75 99.825 76.675C108.075 74.45 117.5 73.275 128.05 73.275C138.65 73.275 148.1 74.5 156.425 76.75C159.25 74.6 173.25 64.55 186.75 65.775C187.475 67.7 192.925 80.35 188.125 95.275C196.225 104.475 200.35 115.95 200.35 128.35C200.35 153.9 185.6 175.375 150.35 181.575C153.369 184.544 155.767 188.085 157.402 191.991C159.037 195.898 159.878 200.09 159.875 204.325V232.45C160.075 234.7 159.875 236.925 163.625 236.925C207.9 222 239.775 180.175 239.775 130.9C239.775 69.1 189.675 19.075 127.9 19.075Z"
          fill="black"
        />
      </svg>
    </a>
  );
}

function TelegramIcon({ href }: { href: string }) {
  return (
    <a href={href} className="hover:scale-150 transition-all">
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z"
          fill="black"
        />
      </svg>
    </a>
  );
}

function LinkCard({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex text-center w-full">
        <div className="w-10">
          {image && (
            <Image
              className="rounded-sm"
              alt={title}
              src={
                image.includes("logos_linkedin-icon.svg")
                  ? linkedinImage
                  : image.includes("ant-design_github-filled.svg")
                  ? gitHubImage
                  : instagramImage
              }
              width={40}
              height={40}
            />
          )}
        </div>
        <h2 className="flex justify-center items-center font-semibold w-full text-gray-700 -ml-10">
          {title}
        </h2>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col items-center mx-auto w-full justify-center mt-16 px-8">
      <Image
        className="rounded-full"
        alt={data.name}
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-2 text-xl">{data.name}</h1>
      <h3 className="mb-6 text-md">{data.description}</h3>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex items-center gap-4 mt-8 text-white">
        {data.socials.map((link) => {
          if (link.href.includes("t.me")) {
            console.log(link.href);
            return <TelegramIcon key={link.href} {...link} />;
          }
          if (link.href.includes("github")) {
            return <GithubIcon key={link.href} {...link} />;
          }
          if (link.href.includes("instagram")) {
            return <InstagramIcon key={link.href} {...link} />;
          }
        })}
      </div>
    </div>
  );
}
