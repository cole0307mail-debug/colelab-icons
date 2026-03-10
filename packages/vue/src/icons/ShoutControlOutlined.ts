// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import ShoutControlOutlinedSvg from '@colelab/icons-svg/es/asn/ShoutControlOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'ShoutControlOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: ShoutControlOutlinedSvg }, slots);
  },
});
