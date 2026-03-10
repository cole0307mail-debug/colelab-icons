// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import FilePptOutlinedSvg from '@colelab/icons-svg/es/asn/FilePptOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'FilePptOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: FilePptOutlinedSvg }, slots);
  },
});
