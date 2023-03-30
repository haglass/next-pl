import Image from "next/legacy/image";
import React from "react";
import samplePic from "../public/sample.png";

const ProjectItem = ({ data }) => {
  console.log("========");
  console.log(data);
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgUrl = data.cover.external?.url || data.cover.file.url;
  const gitUrl = data.properties.Github.url;
  const ytUrl = data.properties.Youtube.url;
  const siteUrl = data.properties.Site.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  const calculatedPeriod = (start, end) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    var startDate = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    var endDate = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    // console.log(`startDate: ${startDate}`);
    // console.log(`endDate: ${endDate}`);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    // console.log(`기간 : ${result}`);
    return result;
  };
  // properties.이름.title[0].type
  //discription.rich_text[0].plain_text
  //cover.external.url
  return (
    <div className="project-card">
      <div className="bg-gray-100 p-6 rounded-lg">
        <a href={siteUrl} target="_blank">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={imgUrl}
            width="100%"
            height="60%"
            layout="responsive"
            alt="content"
          />
        </a>

        <h3 className="tracking-widest text-indigo-500 text-xs dark:text-slate-500 font-medium title-font">
          {tags.map((item) => (
            <span key={item.id}>{item.name}</span>
          ))}
        </h3>
        <h2 className="text-lg text-gray-900 dark:text-slate-500 font-medium title-font mb-4">
          {title}
        </h2>
        <p className="leading-relaxed text-base">{description}</p>
        {/* 링크 */}
        <div>
          <a className="dark:text-slate-500" href={gitUrl} target="_blank">
            Github
          </a>
          <a href={ytUrl} target="_blank">
            Youtube
          </a>
        </div>
        {/* 작업기간 */}
        <div className="text-xs font-medium">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}) 일
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
