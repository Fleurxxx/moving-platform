/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-14 18:02:19
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-14 18:17:40
 * @FilePath: \moving-platform\src\utils\logos.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const requireModule = require.context(
    '../assets/image/cooperation
    ',
    false,
    /\.png$/,
);

const logos: string[] = [];
requireModule.keys().forEach((key: string) => {
logos.push(`../assets/index/logos/${key.split('./')[1]}`);
});

export default logos;
  