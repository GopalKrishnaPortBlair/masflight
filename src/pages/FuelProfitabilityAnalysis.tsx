import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const FuelProfitabilityAnalysis = () => {
  const [selected, setSelected] = useState("stdDev");
  const [stdDev, setStdDev] = useState("");
  const [priceVar, setPriceVar] = useState("");
  const [fileName, setFileName] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Fuel Profitability Analysis</h1>

      <Card className="max-w-xl">
        <CardHeader>
          <CardTitle>Set Rules</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <RadioGroup
            defaultValue="stdDev"
            onValueChange={(value) => setSelected(value)}
          >
            <div className="flex items-center space-x-4">
              <RadioGroupItem value="stdDev" id="stdDev" />
              <Label htmlFor="stdDev">Allowable Fuel Standard Deviation</Label>
              <Input
                className="w-32"
                disabled={selected !== "stdDev"}
                value={stdDev}
                onChange={(e) => setStdDev(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-4">
              <RadioGroupItem value="priceVar" id="priceVar" />
              <Label htmlFor="priceVar">Allowable Fuel Price Variance</Label>
              <Input
                className="w-32"
                disabled={selected !== "priceVar"}
                value={priceVar}
                onChange={(e) => setPriceVar(e.target.value)}
              />
            </div>
          </RadioGroup>

          <div>
            <Label htmlFor="fileUpload">Upload File</Label>
            <Input
              type="file"
              id="fileUpload"
              onChange={(e) =>
                setFileName(e.target.files?.[0]?.name || "")
              }
            />
            {fileName && <p className="text-sm text-gray-600 mt-1">{fileName}</p>}
          </div>

          <Button>Submit</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FuelProfitabilityAnalysis;
