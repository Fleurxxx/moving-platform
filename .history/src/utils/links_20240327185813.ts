/*
 * @Author: Fleurxxx 984209872@qq.com
 * @Date: 2024-03-27 18:51:18
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-27 18:57:24
 * @FilePath: \yike-design-dev\packages\yike-design-ui\src\components\utils\links.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export class VideoLinkUtils {
  private videoLinks: Map<string, string>;

  constructor() {
    // 初始化视频链接的 Map
    this.videoLinks = new Map<string, string>();
  }

  // 添加视频链接
  addVideoLink(title: string, url: string): void {
    this.videoLinks.set(title, url);
  }

  // 获取视频链接
  getVideoLink(title: string): string | undefined {
    return this.videoLinks.get(title);
  }

  // 打印所有视频链接
  printAllVideoLinks(): void {
    console.log("All Video Links:");
    this.videoLinks.forEach((url, title) => {
      console.log(`${title}: ${url}`);
    });
  }

  // 删除视频链接
  deleteVideoLink(title: string): boolean {
    return this.videoLinks.delete(title);
  }

  // 清空所有视频链接
  clearAllVideoLinks(): void {
    this.videoLinks.clear();
  }
}

// // 示例用法
// const videoUtils = new VideoLinkUtils();

// // 添加视频链接
// videoUtils.addVideoLink("Video 1", "https://example.com/video1.mp4");
// videoUtils.addVideoLink("Video 2", "https://example.com/video2.mp4");

// // 获取视频链接并打印
// console.log("Video 1 URL:", videoUtils.getVideoLink("Video 1")); // 输出视频链接
// console.log("Video 3 URL:", videoUtils.getVideoLink("Video 3")); // 输出 undefined

// // 打印所有视频链接
// videoUtils.printAllVideoLinks();

// // 删除视频链接
// videoUtils.deleteVideoLink("Video 1");

// // 清空所有视频链接
// videoUtils.clearAllVideoLinks();

// // 打印空的视频链接
// videoUtils.printAllVideoLinks();
