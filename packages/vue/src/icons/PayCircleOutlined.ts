// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PayCircleOutlinedSvg from '@colelab/icons-svg/es/asn/PayCircleOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PayCircleOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PayCircleOutlinedSvg }, slots);
  },
});
