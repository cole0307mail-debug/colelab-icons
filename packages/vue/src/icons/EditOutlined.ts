// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import EditOutlinedSvg from '@colelab/icons-svg/es/asn/EditOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'EditOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: EditOutlinedSvg }, slots);
  },
});
