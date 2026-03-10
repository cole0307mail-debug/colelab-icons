// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PartlyCloudyOutlinedSvg from '@colelab/icons-svg/es/asn/PartlyCloudyOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PartlyCloudyOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PartlyCloudyOutlinedSvg }, slots);
  },
});
