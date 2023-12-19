import checkMark from '../../assets/check-mark.png';
export default function ApplicationSubmitted() {
  return (
    <div className="flex flex-col justify-center items-center mt-12">
      <div>
        <img src={checkMark} alt="check mark" className="max-w-[200px]" />
      </div>
      <h1>Application submitted successfully</h1>
    </div>
  );
}
