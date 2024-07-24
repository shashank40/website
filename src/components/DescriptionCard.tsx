export const DescriptionCard = () => {
  return (
    <div className="relative mt-32 min-h-20">
      <img
        src="https://via.placeholder.com/150"
        alt="placeholder"
        className="rounded-full h-20 w-20 absolute left-0 top-0"
      />
      <div className="mt-8 left-4 top-20 absolute space-y-6">
        <h1 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Hello !</h1>
        <p className="text-gray-900 dark:text-gray-400">
        I'm Shashank, I work as a software and product engineer designer. I specialize in building web applications and sites using Javascript, React, Vue & Node. I've procrastinated building this website for years but finally it's here, I've carved out my own little nook on the internet to share my silly experiments, nifty projects, and thoughts (mostly about tech and design). 
        </p>
        <p className="text-gray-900 dark:text-gray-400">
        By day, I'm a Software Developer at Sundial, and by night (and weekends), I'm busy tinkering with some random tool or app that I am building.
        </p>
      </div>
    </div>
  );
};
