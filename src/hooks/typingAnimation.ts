export async function typingAnimation(nodeList: NodeListOf<Element>) {
  return new Promise(async (resolve: Function) => {
    let txtList: Array<string> = [];
    for (let node of nodeList) {
      if (node.textContent)
        txtList.push(node.textContent);
      node.textContent = "";
    }
    for (let i = 0; i < nodeList.length; i++) {
      let nodeToAnimate = nodeList[i];
      let nodeToAnimateTxt = txtList[i];

      await (async () => {
        return new Promise<void>(async resolve => {
          let count = 0;
          while (true) {
            if (nodeToAnimateTxt[count - 1] == '§') {
              await blinkFunction(800, 200, nodeToAnimate);
              nodeToAnimateTxt = nodeToAnimateTxt.substring(0, count - 1) +
                nodeToAnimateTxt.substring(count, nodeToAnimateTxt.length);
            }

            if (count <= nodeToAnimateTxt.length)
              nodeToAnimate.textContent = nodeToAnimateTxt.substring(0, count++)
            else {
              resolve();
              break;
            }

            await sleepFunction(80);
          }
        })
      })();
    }

    resolve();

    while (true) {
      await blinkFunction(800, 200, nodeList[nodeList.length - 1]);
    }
  })
};

function sleepFunction(ms: number) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

function blinkFunction(sleepTime: number, blinkTime: number, node: Element) {
  return new Promise<void>(resolve => {
    let count = 0;
    let controller = false;

    let timer = setInterval(() => {
      count += blinkTime;
      if (count > sleepTime) {
        clearInterval(timer);
        resolve()
      }
      if (controller) {
        node.textContent = node.textContent + "_";
      } else if (node.textContent) {
        node.textContent = node.textContent.replace("_", "");
      }
      controller = !controller;
    }, blinkTime);
  });
}