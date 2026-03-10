// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import Service24HourOutlinedSvg from '@colelab/icons-svg/es/asn/Service24HourOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'Service24HourOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: Service24HourOutlinedSvg }, slots);
  },
});
