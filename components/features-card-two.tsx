export default function FeaturesCardTwo() {
  return (
    <section className='w-full flex flex-row h-screen justify-between bg-black'>
      <div className='feature_p_md w-1/2'>
        <h1 className='head_text text-slate-50 mb-12'>Features</h1>
        <p className='text-slate-50 mb-12'>
          Custom Pod Job Alerts: Configure notifications for specific pod jobs,
          ensuring awareness of task outcomes.
        </p>
        <p className='text-slate-50 mb-12'>
          Extending Monitoring Scope: Capture vital metrics from diverse apps,
          gaining a unified ecosystem view.
        </p>
        <p className='text-slate-50 mb-12'>
          Seamless Team Communication: Quickly update teams through Slack
          channels or texts, promoting collaboration.
        </p>
      </div>
      <div className='w-1/2 grid place-items-center feature_p_md'>
        <p className='text-slate-50 mb-12'>
          Seamless Team Communication: Quickly update teams through Slack
          channels or texts, promoting collaboration.
        </p>
        <p className='text-slate-50 mb-12'>
          Seamless Team Communication: Quickly update teams through Slack
          channels or texts, promoting collaboration.
        </p>
      </div>
    </section>
  );
}
