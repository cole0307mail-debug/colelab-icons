// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ThermometerOutlinedSvg from '@colelab/icons-svg/es/asn/ThermometerOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ThermometerOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ThermometerOutlinedSvg }, slots);
  },
});
