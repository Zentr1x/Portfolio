import ReflectionCard from "../components/ReflectionCard";

import reflect1 from "../assets/reflect1.webp";
import reflect2 from "../assets/reflect2.webp";
import reflect3 from "../assets/reflect3.webp";
import reflect4 from "../assets/reflect4.webp";
import reflect5 from "../assets/reflect5.webp";
import reflect6 from "../assets/reflect6.jpg";
import reflect7 from "../assets/reflect7.webp";
import reflect8 from "../assets/reflect8.webp";

import "../css/ReflectionHome.css";

export default function Reflection() {
  return (
    <div>
      <h1 className="title">Reflection page</h1>
      <div className="reflection-grid">
        <ReflectionCard
          title="Reflections With Thomas Part 1"
          date="1 May 2024"
          description="Part 1 of the things I learned in my internship"
          image={reflect1}
          // nav="reflection-1"
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-1/"
        />

        <ReflectionCard
          title="Reflections With Thomas Part 2"
          date="15 May 2024"
          description="Part 2 of the things I learned in my internship"
          image={reflect2}
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-2/"
        />

        <ReflectionCard
          title="Reflections With Thomas Part 3"
          date="29 May 2024"
          description="Part 3 of the things I learned in my internship"
          image={reflect3}
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-3/"
        />

        <ReflectionCard
          title="Reflections With Thomas Part 4"
          date="20 June 2024"
          description="Part 4 of the things I learned in my internship"
          image={reflect4}
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-4/"
        />

        <ReflectionCard
          title="Reflections With Thomas Part 5"
          date="10 July 2024"
          description="Part 5 of the things I learned in my internship"
          image={reflect5}
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-5/"
        />

        <ReflectionCard
          title="Reflections With Thomas Part 6"
          date="18 July 2024"
          description="Part 6 of the things I learned in my internship"
          image={reflect6}
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-6/"
        />

        <ReflectionCard
          title="Reflections With Thomas Part 7"
          date="27 August 2024"
          description="Part 7 of the things I learned in my internship"
          image={reflect7}
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-7/"
        />

        <ReflectionCard
          title="Reflections With Thomas Part 8"
          date="21 Oct 2024"
          description="Part 8 of the things I learned in my internship"
          image={reflect8}
          nav="https://kwtechsolutions.com.sg/knowledge-base/reflections-with-thomas-part-8/"
        />
      </div>
    </div>
  );
}
