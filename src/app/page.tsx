"use client";
import { SelectDemo } from "@/app/dropdown";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  // * Data
  const Default__Options = [
    { key: "id", label: "Id" },
    { key: "stationBayId", label: "Station Bay ID" },
    { key: "vehicleId", label: "Vehicle ID" },
    { key: "entryDate", label: "Entry Date" },
    { key: "exitDate", label: "Exit Date" },
    { key: "creationDate", label: "Creation Date" },
    { key: "lastUpdated", label: "Last Updated Date" },
    { key: "action", label: "Action" },
    { key: "cameraDetection", label: "Camera Detection" },
    { key: "currentDischarged", label: "Current Discharged Value" },
    { key: "ph", label: "pH" },
    { key: "conductivity", label: "Conductivity" },
    { key: "waitingAccount", label: "Waiting Account Number" },
    { key: "lastPh", label: "Last pH" },
    { key: "lastConductivity", label: "Last Conductivity" },
  ];

  const Dimension_Options = [
    { key: "categoryname", label: "Category Name" },
    { key: "totalvalue", label: "Total Value" },
    { key: "minvalue", label: "Minimum Value" },
    { key: "maxvalue", label: "Maximum Value" },
    { key: "avgvalue", label: "Average Value" },
  ];

  const Metrices_Options = [{ key: "Count", label: "Count" }];

  // & State
  const [xAxis, setXAxis] = useState("");
  const [checked, setChecked] = useState(false);
  const [metrics, setMetrics] = useState("");
  const [xAxisSortedBy, setXAxisSortedBy] = useState("");
  const [dimension, setDimension] = useState("");

  // & Handlers
  function handlexAxisChange(val: string) {
    setXAxis(val);
  }

  function handleCheckedChange() {
    setChecked(!checked);
  }

  function handleMetricsChange(val: string) {
    setMetrics(val);
  }

  function handleXAxisSortedByChange(val: string) {
    setXAxisSortedBy(val);
  }

  function handleDimensionChange(val: string) {
    setDimension(val);
  }

  // & Logic for Sorted By Options
  const sortedByOptions =
    dimension !== ""
      ? Dimension_Options
      : xAxis !== ""
      ? metrics
        ? [
            {
              key: xAxis,
              label:
                Default__Options.find((o) => o.key === xAxis)?.label || xAxis,
            },
            {
              key: metrics,
              label:
                Metrices_Options.find((o) => o.key === metrics)?.label ||
                metrics,
            },
          ]
        : [
            {
              key: xAxis,
              label:
                Default__Options.find((o) => o.key === xAxis)?.label || xAxis,
            },
          ]
      : [];

  return (
    <form className="mx-auto w-[60%] font-semibold mt-20 p-5 bg-[#FAF9EE] rounded-2xl shadow-2xl space-y-6">
      {/* X Axis */}
      <div className="flex items-center gap-4">
        <label className="w-28">X-axis</label>
        <SelectDemo
          value={xAxis}
          onChange={handlexAxisChange}
          title="Drop a coloumn here or click"
          options={Default__Options}
        />
      </div>

      {/* Force categorical */}
      {xAxis && (
        <div className="flex items-center gap-4">
          <label className="w-28">Force categorical</label>
          <Checkbox onClick={handleCheckedChange} checked={checked} />
        </div>
      )}

      {/* X Axis Sorted By */}
      {checked && (
        <div className="flex items-center gap-4">
          <label className="w-28">X Axis Sorted By</label>
          <SelectDemo
            value={xAxisSortedBy}
            onChange={handleXAxisSortedByChange}
            title="Drop a coloumn/Metrics here or click"
            options={sortedByOptions}
          />
        </div>
      )}

      {/* Metrics */}
      <div className="flex items-center gap-4">
        <label className="w-28">Metrics</label>
        <SelectDemo
          value={metrics}
          onChange={handleMetricsChange}
          title="Drop a coloumn/Metrics here or click"
          options={xAxis ? Metrices_Options : []}
        />
      </div>

      {/* Dimension */}
      <div className="flex items-center gap-4">
        <label className="w-28">Dimension</label>
        <SelectDemo
          value={dimension}
          onChange={handleDimensionChange}
          title="Drop a coloumn/Metrics here or click"
          options={Default__Options}
        />
      </div>
    </form>
  );
}
