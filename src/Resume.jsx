import ResumeImage from './assets/resume.png';

export default function Resume() {
  return (
    <div style={{ width: '100%', margin: 'center', marginTop: '2rem' }}>
      <img
        src={ResumeImage}
        alt="My Resume"
        style={{ width: '100%', height: 'auto', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}
      />
    </div>
  );
}