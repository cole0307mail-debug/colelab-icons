// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BlockOutlinedSvg from '@colelab/icons-svg/es/asn/BlockOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BlockOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BlockOutlinedSvg }, slots);
  },
});
