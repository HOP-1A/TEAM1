"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// import * as React from "react"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"

// import { cn } from "@/lib/utils"
// import { Calendar } from "@/components/ui/calendar"
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// export function DatePickerDemo() {
//   const [date, setDate] = React.useState<Date>()

const profilePage = () => {
  return (
    <div className="flex justify-center mx-[293px] font-[monospace]">
      <div className="w-[280px] h-[407px]"> hello</div>
      <div className="w-[920px] h-[1533px] px-[13px] py-[16px]">
        <div className="text-[18px]">Хувийн мэдээлэл</div>
        <hr />
        <div className="flex gap-[20px]">
          <div>
            <Button className="bg-[#EEEFF2] w-[80px] h-[28px] text-[12px] text-[#4E5562]">
              Мэдээлэл
            </Button>
          </div>
          <div>
            <Button className="bg-[#EEEFF2] w-[142px] h-[28px] text-[12px] text-[#4E5562]">
              Холбогдох мэдээлэл
            </Button>
          </div>
          <div>
            <Button className="bg-[#EEEFF2] w-[68px] h-[28px] text-[12px] text-[#4E5562]">
              Нүүц үг
            </Button>
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Нүүр зураг</CardTitle>
              <CardDescription>
                JPG эсвэл PNG форматтай зураг оруулах боломжтой.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col font-bold">
                <div className="flex justify-center gap-[20px] h-[103px]">
                  <div>
                    <div>
                      <span className="text-red-600">*</span>Нэр
                    </div>
                    <div>
                      <Input className="w-[415px] h-[50px] p-[11px]" />
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="text-red-600">*</span>Эцэг/Эх-ийн нэр
                    </div>
                    <div>
                      <Input className="w-[415px] h-[50px] p-[11px]" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center gap-[20px] h-[103px]">
                  <div>
                    <div>
                      <span className="text-red-600">*</span>Төрсөн он сар
                    </div>
                    <div>
                      <Input
                        type="date"
                        className="w-[415px] h-[50px] p-[11px]"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <span className="text-red-600">*</span>Хүйс
                    </div>
                    <div>
                      <Input className="w-[415px] h-[50px] p-[11px]" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default profilePage;
