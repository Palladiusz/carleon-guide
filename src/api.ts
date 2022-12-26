import { convertTierToName } from "./logic";

interface IGetImgUrlProps {
  name: string;
  tier: number;
  enchant: number;
}

const getImgUrl = (props: IGetImgUrlProps) => {
  const { name, tier, enchant } = props;
  const numberTier = Number(tier);

  const basicUrl = "https://render.albiononline.com/v1/item/";

  const fullUrl = `${basicUrl}${convertTierToName(
    numberTier
  )} ${name}@${enchant}?&quality=5`;

  return fullUrl;
};

export default getImgUrl;
