import { TagCard, TagWrapper } from "./styles";

const TagBlock = ({ tags }) => {
  return (
    <TagWrapper>
      {tags &&
        tags.map((tag, index) => <TagCard key={`tag${index}`}>{tag}</TagCard>)}
    </TagWrapper>
  );
};
export default TagBlock;
