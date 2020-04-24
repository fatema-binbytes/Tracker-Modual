const getXLabel = (labels) => {
  const arr = [];
  arr.push(
    labels[0].substring(0, 6),
    labels[Math.floor(labels.length / 4)].substring(0, 6),
    labels[Math.floor(labels.length / 2)].substring(0, 6),
    labels[labels.length - 1].substring(0, 6),
  );
  return arr;
};

const GraphData = (data, label) => {
  const arr = [];
  if (label === 'Month') {
    const lastMonth = data[data.length - 1];
    data.map((x) => {
      if (x.date.includes(lastMonth.date.substring(3))) {
        arr.push(x);
      }
    });
  } else if (label === 'Week') {
    const i = data.length;
    const subData = data.slice(i - 7, i);
    subData.map((x) => arr.push(x));
  } else {
    data.map((x) => arr.push(x));
  }
  const xAxis = getXLabel(arr.map((x) => x.date));
  const graphData = [arr, xAxis];
  console.log(graphData);

  return graphData;
};
export default GraphData;
