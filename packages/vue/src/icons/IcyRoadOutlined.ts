// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import IcyRoadOutlinedSvg from '@colelab/icons-svg/es/asn/IcyRoadOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'IcyRoadOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: IcyRoadOutlinedSvg }, slots);
  },
});
