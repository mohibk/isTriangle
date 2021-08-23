import Option from "./Option";

export default function Question({ question, options, qId }) {
  return (
    <div className="ques-box">
      <p>
        {qId + 1}. {question}
      </p>

      {options.map((item) => {
        const { id, option } = item;
        return <Option key={id} option={option} qId={qId} />;
      })}
    </div>
  );
}
