import Chart from 'react-apexcharts';

const VisitorStatistics = () => {
  const options = {
    chart: {
      id: 'basic-bar'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  };
  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }
  ];
  return (
    <div className="row">
      <div className="mixed-chart">
        <Chart options={options} series={series} type="bar" width="100%" className="visit-chart" />
      </div>
    </div>
  );
};

export default VisitorStatistics;
