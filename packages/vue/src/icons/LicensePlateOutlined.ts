// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import LicensePlateOutlinedSvg from '@colelab/icons-svg/es/asn/LicensePlateOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'LicensePlateOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: LicensePlateOutlinedSvg }, slots);
  },
});
