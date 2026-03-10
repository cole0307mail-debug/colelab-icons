// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import HospitalOutlinedSvg from '@colelab/icons-svg/es/asn/HospitalOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'HospitalOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: HospitalOutlinedSvg }, slots);
  },
});
