import { useState } from "react";
import styled from "styled-components";
import { LoremIpsum } from "lorem-ipsum";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  margin: auto;
`;

const Title = styled.h1`
  color: white;
  font-size: 16rem;
  font-weight: normal;
  text-align: center;
  margin: 2rem 0 4rem;
`;

const Description = styled.div`
  color: #c2d7db;
  font-size: 4rem;
  margin-bottom: 8rem;
`;

const Button = styled.button`
  background: #176395;
  border: none;
  border-radius: 100rem;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.75);
  color: white;
  font-family: "Civitype-FG";
  font-size: 6rem;
  padding: 3rem 8rem;
  cursor: pointer;
  outline: none;
  transition: all 0.33s;
  :hover {
    background: #003967;
    transform: translateY(2px);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.9);
  }
`;

const Again = styled.div`
  color: #c2d7db;
  font-size: 3rem;
  margin: 2rem 0 4rem;
`;

const Ipsum = styled.div`
  background: #293d40;
  border-radius: 1rem;
  color: #c2d7db;
  text-align: center;
  padding: 4rem 8rem;
  margin: 0 0 8rem;
  font-size: 2rem;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: 300;
  line-height: 1.75;
  white-space: pre;
  word-wrap: normal;
`;

const snippets = [
  "ashes of molten hatred",
  "Raised by",
  "demons",
  "abodes of the end",
  "The reaper's scythe",
  "I fall upon to",
  "light my path",
  "mangled wounds",
  "The resurrection of the evil one",
  "I don't fucking care",
  "if I live or die",
  "bishop preaching fire",
  "get away with my sins",
  "Despise everything I see",
  "Ain't got respect for humanity",
  "immortality",
  "The reaper's shadow",
  "obscure my path",
  "Every day",
  "I'm getting battered up",
  "until I bleed",
  "You motherfuckers just leave me be",
  "the pain I feel inside",
  "I don't give a fuck",
  "if you hate me",
  "Led by the reaper",
  "I walk in the night",
  "Show me the way",
  "your kingdom come",
  "I believe in Armageddon",
  "Baptized in alcohol",
  "Embodiment of anti-Christ",
  "I'm living for my own demise",
  "Reaper",
  "Jau jau",
  "Motherfucker",
  "Flying fuck",
  "Fuck",
  "Cunt",
];

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1,
  },
  wordsPerSentence: {
    max: 8,
    min: 4,
  },
});

const insertSnippet = (loremArray, snippets) => {
  const arrLen = loremArray.length;
  const index = Math.floor(Math.random() * (arrLen - 2) + 2);
  const snippetLen = snippets.length;
  const snippetIndex = Math.floor(Math.random() * (snippetLen - 0) + 0);
  return loremArray.splice(index, 0, snippets[snippetIndex]);
};

export default function Home() {
  const [ipsum, setIpsum] = useState("");

  const generate = (e) => {
    e.preventDefault();
    const newLorem = lorem.generateParagraphs(12);
    const loremArray = newLorem.split(" ");
    const alexiIpsumArray = ["Alexi", "ipsum", ...loremArray.slice(1)];
    insertSnippet(alexiIpsumArray, snippets);
    insertSnippet(alexiIpsumArray, snippets);
    insertSnippet(alexiIpsumArray, snippets);
    insertSnippet(alexiIpsumArray, snippets);
    insertSnippet(alexiIpsumArray, snippets);
    insertSnippet(alexiIpsumArray, snippets);
    const alexiIpsum = alexiIpsumArray.join(" ");
    setIpsum(alexiIpsum);
  };

  return (
    <Container>
      <Title>Alexi Ipsum</Title>
      <Description>
        End of fucking lorem ipsum. Make your placeholder text a fucking story.
      </Description>
      {ipsum && <Ipsum>{ipsum}</Ipsum>}
      <Button onClick={generate}>{ipsum ? "Again!" : "Generate"}</Button>
      {ipsum && <Again>...and again and on and on...</Again>}
    </Container>
  );
}
