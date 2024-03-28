const requireModule = require.context(
    '../assets/index/logos',
    false,
    /\.png$/,
  );
  
  const logos: string[] = [];
  requireModule.keys().forEach((key: string) => {
    logos.push(`../assets/index/logos/${key.split('./')[1]}`);
  });
  
  export default logos;
  