/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-12-12 20:47:51
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-25 19:13:09
 * @FilePath: \hope-enroll\src\store\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia';

interface FirstStoreState {
  token: string;
  id: string;
  username: string;
  state: boolean;
  apply: number;
  video: number; //0：视频，1：直播
  curnum: number;
  curtime: string;
}

export const user = defineStore('first', {
  state: (): FirstStoreState => {
    return {
      token: '',
      id: '',
      username: '',
      video: ''
      state: false,
      apply: 0,
      curnum: 1,
      curtime:'',
    };
  },
  getters: {
    // 在需要的时候添加你的 getter
  },
  actions: {
    // 在需要的时候添加你的 action
  },
  persist: {
    enabled: true, // 开启数据缓存
    strategies: [
      {
        // key: 'myuser',
        storage: sessionStorage, // 默认是sessionStorage
        paths: ['id','username','state','apply','state1','state2','state3','state4','curnum','curtime']
      },
      // {
      //   storage: localStorage, // 默认是sessionStorage
      //   paths: ['token']
      // }
    ],
  }
});
