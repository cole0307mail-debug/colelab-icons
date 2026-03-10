// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import TemperaturePatchOutlinedSvg from '@colelab/icons-svg/es/asn/TemperaturePatchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'TemperaturePatchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: TemperaturePatchOutlinedSvg }, slots);
  },
});
