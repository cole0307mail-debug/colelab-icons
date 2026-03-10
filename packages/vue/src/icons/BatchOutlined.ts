// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import BatchOutlinedSvg from '@colelab/icons-svg/es/asn/BatchOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'BatchOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: BatchOutlinedSvg }, slots);
  },
});
