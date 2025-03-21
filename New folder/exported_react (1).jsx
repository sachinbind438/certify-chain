import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileCheck } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function CertificateForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    organization: "",
    dateOfIssue: "",
    timeOfIssue: "",
    placeOfIssue: "",
    signingAuthority: "",
    topicOfCertificate: "",
    studentName: "",
    achievementLevel: "",
    fieldOfAchievement: "",
    courseDetails: "",
    gradePoint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      achievementLevel: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Success",
      description: "Certificate issued successfully!",
    });
    setFormData({
      organization: "",
      dateOfIssue: "",
      timeOfIssue: "",
      placeOfIssue: "",
      signingAuthority: "",
      topicOfCertificate: "",
      studentName: "",
      achievementLevel: "",
      fieldOfAchievement: "",
      courseDetails: "",
      gradePoint: "",
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-blue-500 to-blue-700">
      <div className="max-w-3xl mx-auto bg-white/95 backdrop-blur-lg rounded-lg shadow-2xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Issue Certificate
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Name of Organization/Institute</Label>
              <Input
                required
                name="organization"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Date of Issue</Label>
              <Input
                type="date"
                required
                name="dateOfIssue"
                value={formData.dateOfIssue}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Time of Issue</Label>
              <Input
                type="time"
                required
                name="timeOfIssue"
                value={formData.timeOfIssue}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Place of Issue</Label>
              <Input
                required
                name="placeOfIssue"
                value={formData.placeOfIssue}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Signing Authority</Label>
              <Input
                required
                name="signingAuthority"
                value={formData.signingAuthority}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Topic of Certificate</Label>
              <Input
                required
                name="topicOfCertificate"
                value={formData.topicOfCertificate}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Name of Student</Label>
              <Input
                required
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Level of Achievement</Label>
              <Select
                required
                value={formData.achievementLevel}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pass">Pass</SelectItem>
                  <SelectItem value="Merit">Merit</SelectItem>
                  <SelectItem value="Distinction">Distinction</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Field of Achievement</Label>
              <Input
                required
                name="fieldOfAchievement"
                value={formData.fieldOfAchievement}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Student Course Details</Label>
              <Textarea
                required
                name="courseDetails"
                value={formData.courseDetails}
                onChange={handleChange}
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label>Grade Point Overall</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                max="10"
                required
                name="gradePoint"
                value={formData.gradePoint}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button type="submit" className="gap-2">
              <FileCheck className="w-4 h-4" />
              Issue Certificate
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}