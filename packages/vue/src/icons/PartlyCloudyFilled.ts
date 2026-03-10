// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PartlyCloudyFilledSvg from '@colelab/icons-svg/es/asn/PartlyCloudyFilled';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PartlyCloudyFilled',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PartlyCloudyFilledSvg }, slots);
  },
});
