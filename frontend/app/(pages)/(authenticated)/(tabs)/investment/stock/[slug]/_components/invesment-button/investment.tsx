
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { InvestmentIcon } from "./svg/invesment";

export function InvestmentButton() {
  return (
    <Button type="button" className="bg-[#E9EDF6] rounded-lg max-w-[218px] w-full focus:bg-[#004AAD33] h-[43px]">
      <span className="flex flex-row items-center justify-center gap-2">
        <InvestmentIcon />
        <Text >Invertir</Text>
      </span>
    </Button>
  )
}